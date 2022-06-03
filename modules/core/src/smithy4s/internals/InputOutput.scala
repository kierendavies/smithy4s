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

package smithy4s
package internals

import smithy4s.schema._
import smithy4s.schema.Schema._

sealed abstract class InputOutput(val value: String, val ordinal: Int)
    extends Enumeration.Value {
      val hints = Hints.empty
    }

object InputOutput extends Enumeration[InputOutput] {

  override implicit val tagInstance: ShapeTag[InputOutput] = null
  def values: List[InputOutput] = List(Input, Output)

  val id: ShapeId = ShapeId("smithy4s", "InputOutput")
  val schema: Schema[InputOutput] = enumeration(values)

  case object Input extends InputOutput("Input", 0) 
  case object Output extends InputOutput("Output", 1)

}

object Foo {


sealed trait InputOutput2 {
      val hints = Hints.empty
      def ordinal: Int
      def value: String
    }

object InputOutput2  {

  implicit val shapeTag: ShapeTag[InputOutput2] = null
  // override implicit val tagInstance: ShapeTag[InputOutput2] = null
  // def values: List[InputOutput2] = List(Input, Output)

  val id: ShapeId = ShapeId("smithy4s", "InputOutput2")
  val schema: Schema[InputOutput2] = null // enumeration(values)

  case object Input extends InputOutput2 {
    def ordinal: Int = 0
    def value: String = "Input"
  }
  case object Output extends InputOutput2 {
    def ordinal: Int = 1
    def value: String = "Output"
  }

  
}
  import InputOutput2._

Hints(Hints.Binding.fromValue2(InputOutput2.Input))
  // implicitly[ShapeTag[InputOutput]]
  
  // implicit val tagInstance: ShapeTag[InputOutput] = null


}
