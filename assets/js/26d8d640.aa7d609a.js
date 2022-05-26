"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[27],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7749:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_label:"Protocols and smithy4s",title:"Protocols and smithy4s"},l=void 0,d={unversionedId:"codegen/customisation",id:"codegen/customisation",title:"Protocols and smithy4s",description:"Smithy4s is opinionated in what the generated code look like, there are a few things that can be tweaked.",source:"@site/../docs/target/jvm-2.13/mdoc/04-codegen/01-customisation.md",sourceDirName:"04-codegen",slug:"/codegen/customisation",permalink:"/smithy4s/docs/codegen/customisation",editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/04-codegen/01-customisation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Protocols and smithy4s",title:"Protocols and smithy4s"},sidebar:"tutorialSidebar",previous:{title:"AWS",permalink:"/smithy4s/docs/protocols/aws/aws"}},c=[{value:"Packed inputs",id:"packed-inputs",children:[],level:4},{value:"ADT Member Trait",id:"adt-member-trait",children:[],level:4}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Smithy4s is opinionated in what the generated code look like, there are a few things that can be tweaked."),(0,i.kt)("h4",{id:"packed-inputs"},"Packed inputs"),(0,i.kt)("p",null,"By default, smithy4s generates methods the parameters of which map to the fields of the input structure of the corresponding operation."),(0,i.kt)("p",null,"For instance :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'service PackedInputsService {\n  version: "1.0.0",\n  operations: [PackedInputOperation]\n}\n\noperation PackedInputOperation {\n  input: PackedInput,\n}\n\nstructure PackedInput {\n    @required\n    a: String,\n    @required\n    b: String\n}\n')),(0,i.kt)("p",null,"leads to something conceptually equivalent to :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait PackedInputServiceGen[F[_]] {\n\n  def packedInputOperation(a: String, b: String) : F[Unit]\n\n}\n")),(0,i.kt)("p",null,"It is however possible to annotate the service (or operation) definition with the ",(0,i.kt)("inlineCode",{parentName:"p"},"smithy4s.meta#packedInputs")," trait, in order for the rendered method to contain a single parameter, typed with actual input case class of the operation."),(0,i.kt)("p",null,"For instance :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'use smithy4s.meta#packedInputs\n\n@packedInputs\nservice PackedInputsService {\n  version: "1.0.0",\n  operations: [PackedInputOperation]\n}\n')),(0,i.kt)("p",null,"will produce the following Scala code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"\xa0","\xa0":!0},"trait PackedInputServiceGen[F[_]] {\n\n  def packedInputOperation(input: PackedInput) : F[Unit]\n\n}\n")),(0,i.kt)("h4",{id:"adt-member-trait"},"ADT Member Trait"),(0,i.kt)("p",null,"The default behavior of smithy4s when rendering unions that target structures is to render the structure\nin a separate file from the union that targets it. This makes sense if the structure is used in other\ncontexts other than the union. However, it also causes an extra level of nesting within the union.\nThis is because the union will create another case class to contain your structure case class."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"union OrderType {\n  inStore: InStoreOrder\n}\n\nstructure InStoreOrder {\n    @required\n    id: OrderNumber,\n    locationId: String\n}\n")),(0,i.kt)("p",null,"Would render the following scala code:"),(0,i.kt)("p",null,"OrderType.scala:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait OrderType extends scala.Product with scala.Serializable\ncase class InStoreCase(inStore: InStoreOrder) extends OrderType\n")),(0,i.kt)("p",null,"InStoreOrder.scala:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class InStoreOrder(id: OrderNumber, locationId: Option[String] = None)\n")),(0,i.kt)("p",null,"The sealed hierarchy ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderType")," has a member named ",(0,i.kt)("inlineCode",{parentName:"p"},"InStoreCase"),". This is because\n",(0,i.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," is rendered in a separate file and ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderType")," is sealed."),(0,i.kt)("p",null,"However, adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"adtMember")," trait to the ",(0,i.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," structure changes this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"union OrderType {\n  inStore: InStoreOrder\n}\n\n@adtMember(OrderType) // added the adtMember trait here\nstructure InStoreOrder {\n    @required\n    id: OrderNumber,\n    locationId: String\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait OrderType extends scala.Product with scala.Serializable\ncase class InStoreOrder(id: OrderNumber, locationId: Option[String] = None) extends OrderType\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IsStoreOrder")," class has now been updated to be rendered directly as a member of the ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderType"),"\nsealed hierarchy."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The ",(0,i.kt)("inlineCode",{parentName:"em"},"adtMember")," trait can be applied to any structure as long as said structure is targeted by EXACTLY ONE union."),"\nThis means it must be targeted by the union that is provided as parameter to the adtMember trait.\nThis constraint is fulfilled above because ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderType")," targets ",(0,i.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," is\nannotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@adtMember(OrderType)"),".\nThe structure annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"adtMember")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"InStoreOrder"),") also must not be targeted by any other\nstructures or unions in the model. There is a validator that will make sure these requirements are met\nwhenever the ",(0,i.kt)("inlineCode",{parentName:"p"},"adtMember")," trait is in use."),(0,i.kt)("p",null,"Note: The ",(0,i.kt)("inlineCode",{parentName:"p"},"adtMember")," trait has NO impact on the serialization/deserialization behaviors of smithy4s.\nThe only thing it changes is what the generated code looks like. This is accomplished by keeping the\nrendered schemas equivalent, even if the case class is rendered in a different place."))}u.isMDXComponent=!0}}]);