/*
 *  Copyright 2021 Disney Streaming
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

package smithy4s.codegen

import weaver._

object SmithyToIRSpec extends FunSuite {

  test("prettifyName: sdkId takes precedence") {
    expect.eql(
      SmithyToIR.prettifyName(Some("Example"), "unused"),
      "Example"
    )
  }
  test("prettifyName: shapeName is used as a fallback") {
    expect.eql(
      SmithyToIR.prettifyName(None, "Example"),
      "Example"
    )
  }

  test("prettifyName removes whitespace in sdkId") {
    expect.eql(
      SmithyToIR.prettifyName(Some("QuickDB \t\nStreams"), "unused"),
      "QuickDBStreams"
    )
  }

  // Not a feature, just verifying the name is unaffected
  test("prettifyName ignores whitespace in shape name") {
    expect.eql(
      SmithyToIR.prettifyName(None, "This Has Spaces"),
      "This Has Spaces"
    )
  }
}
