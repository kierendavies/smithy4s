/*
 *  Copyright 2021-2022 Disney Streaming
 *
 *  Licensed under the Tomorrow Open Source Technology License, Version 1.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     https://disneystreaming.github.io/TOST-1.0.txt
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package smithy4s.benchmark

import io.circe.syntax._
import org.openjdk.jmh.annotations._
import org.scalacheck.Gen
import org.scalacheck.rng.Seed

import java.util.concurrent.TimeUnit
import smithy4s.HintMask

@BenchmarkMode(Array(Mode.AverageTime))
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Thread)
@Warmup(iterations = 30, time = 200, timeUnit = TimeUnit.MILLISECONDS)
@Measurement(iterations = 100, time = 200, timeUnit = TimeUnit.MILLISECONDS)
@Fork(5)
class JsonBenchmark {

  import Circe._

  val s3objectGen = S3Object.schema.compile(smithy4s.scalacheck.SchematicGen)
  val schema = S3Object.schema
  val jsonCodecs = smithy4s.http.json.codecs
  val jsonCodec =
    smithy4s.http.json
      .codecs(hintMask = HintMask.allAllowed)
      .compileCodec(schema)

  val original = s3objectGen(Gen.Parameters.default, Seed(2048)).get

  @Benchmark
  def measureCirce(): Unit = {
    val json = original.asJson
    val bytes = json.noSpaces.getBytes()
    val _ = io.circe.jawn.decodeByteArray[S3Object](bytes)
  }

  @Benchmark
  def measureSmithy4sJson(): Unit = {
    val bytes =
      smithy4s.http.json
        .codecs(hintMask = HintMask.allAllowed)
        .writeToArray[S3Object](jsonCodec, original)
    val _ =
      smithy4s.http.json
        .codecs(hintMask = HintMask.allAllowed)
        .decodeFromByteArray(jsonCodec, bytes)
  }
}
