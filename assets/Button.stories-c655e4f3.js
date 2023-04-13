import{j as f}from"./jsx-runtime-670450c2.js";import{s as v,C as o}from"./styled-components.browser.esm-6b900c50.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const g={small:"12px",medium:"14px",big:"16px"},t=v.button`
  font-size: ${e=>g[e.size]};
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.2s ease;
  cursor: pointer;

  ${e=>e.variant==="primary"&&o`
      color: #ffffff;
      background-color: #0070f3;

      &:hover {
        background-color: #0061d1;
      }
    `}

  ${e=>e.variant==="secondary"&&o`
      color: #000000;
      background-color: #eaeaea;

      &:hover {
        background-color: #dcdcdc;
      }
    `}
`,n=({variant:e="primary",size:p="medium",text:c,onClick:y})=>f(t,{variant:e,onClick:y,size:p,children:c});try{t.displayName="ButtonWrapper",t.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"medium"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"medium"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const q={title:"Example/Button",component:n,tags:["docsPage"],argTypes:{variant:{options:["primary","secondary"],control:{type:"radio"}},size:{options:["small","medium","big"],control:{type:"radio"}},text:{control:{type:"text"}}}},a={args:{variant:"primary",size:"medium",text:"Primary button"}},r={args:{variant:"secondary",size:"medium",text:"Secondary button"}};var i,s,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    text: "Primary button"
  }
}`,...(u=(s=a.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "medium",
    text: "Secondary button"
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const V=["Primary","Secondary"];export{a as Primary,r as Secondary,V as __namedExportsOrder,q as default};
//# sourceMappingURL=Button.stories-c655e4f3.js.map
