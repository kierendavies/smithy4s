package smithy4s.codegen

import mill.Agg
import mill.T
import mill.api.PathRef
import mill.define.Sources
import mill.scalalib.Dep
import mill.scalalib.Lib
import mill.scalalib.ScalaModule
import mill.scalalib.DepSyntax
import smithy4s.codegen.BuildInfo
import smithy4s.codegen.Codegen
import smithy4s.codegen.CodegenArgs

trait Smithy4sModule extends ScalaModule {
  def smithy4sSources: Sources = T.sources {
    millSourcePath / "smithy"
  }

  def smithy4sAllowedNamespaces: T[Option[Agg[String]]] = T { Agg() }
  def smithy4sExcludedNamespaces: T[Option[Agg[String]]] = T { Agg() }
  def smithy4sIvyDeps: T[Agg[Dep]] = T { Agg() }
  def smithy4sModelTransformers: T[Seq[String]] = T { Seq() }

  def compileSmithy4s: T[PathRef] = T {
    Codegen
      .processSpecs(
        CodegenArgs(
          specs = smithy4sSources().map(_.path).toList,
          output = T.dest / "scala",
          openapiOutput = T.dest / "openapi",
          skipScala = false,
          skipOpenapi = false,
          discoverModels = true, // we need protocol here
          allowedNS = smithy4sAllowedNamespaces().map(_.toSet),
          excludedNS = smithy4sExcludedNamespaces().map(_.toSet),
          repositories = repositoriesTask().collect { case m: MavenRepository =>
            m.root
          },
          dependencies = smithy4sIvyDeps().map { m =>
            if (CrossVersion.disabled == m.crossVersion)
              s"${m.organization}:${m.name}:${m.revision}"
            else s"${m.organization}::${m.name}:${m.revision}"
          }.toList,
          transformers = smithy4sModelTransformers()
        )
      )

    PathRef(T.dest / "scala")
  }

  override def ivyDeps: T[Agg[Dep]] = T {
    super.ivyDeps() ++ Agg(
      ivy"com.disneystreaming.smithy4s::smithy4s-core:${BuildInfo.version}"
    )
  }

  override def generatedSources: T[Seq[PathRef]] = T {
    super.generatedSources() :+ compileSmithy4s()
  }
}
