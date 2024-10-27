import{j as s}from"./jsx-runtime-CexXSJP5.js";import{r as b}from"./index-BP8_t0zE.js";import{C as N}from"./CheckboxIcon-DCVo8lft.js";import{R,I as j}from"./index-DJGhFl-C.js";import{c as k}from"./clsx-B-dksMZM.js";import"./index-BTQGKeGX.js";import"./index-B1txWHSv.js";import"./index-DdaKtqnf.js";import"./index-BQor3Phr.js";const S="_CheckboxContainer_yen8t_1",I="_CheckboxRoot_yen8t_8",D="_disabled_yen8t_8",E="_checked_yen8t_40",w="_Label_yen8t_66",e={CheckboxContainer:S,CheckboxRoot:I,disabled:D,checked:E,Label:w},m=b.forwardRef((l,a)=>{const{checked:c,className:C,disabled:i,error:L,id:u,label:g,onCheckedChange:p,...f}=l,x=b.useId(),_=y=>{y.key==="Enter"&&p?.(!c)},h={indicator:k(e.CheckboxIndicator,{[e.checked]:c,[e.disabled]:i}),label:k(e.Label,{[e.disabled]:i},C),root:k(e.CheckboxRoot,{[e.checked]:c,[e.disabled]:i},C)};return s.jsxs("div",{className:e.CheckboxContainer,children:[s.jsx(R,{...f,checked:c,className:h.root,id:u??x,onCheckedChange:p,onKeyDown:_,ref:a,children:c&&s.jsx(j,{className:h.indicator,asChild:!0,children:s.jsx(N,{})})}),s.jsx("label",{className:h.label,htmlFor:u??x,children:g})]})});m.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{error:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""}}};const z={argTypes:{onCheckedChange:{action:"checked"}},component:m,tags:["autodocs"],title:"COMPONENTS/Checkbox"},r={args:{checked:!0,disabled:!1,id:"checked-checkbox",label:"Click me"}},d={args:{checked:!1,disabled:!1,id:"unchecked-checkbox",label:"Click me"}},o={args:{checked:!0,disabled:!0,id:"disabled-unchecked-checkbox",label:"Click me"}},n={args:{checked:!1,disabled:!0,id:"disabled-checked-checkbox",label:"Click me"}},t={args:{label:"Click me"},render:l=>{const[a,c]=b.useState(!0);return s.jsx(m,{...l,checked:a,onCheckedChange:()=>{c(!a)}})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    id: 'checked-checkbox',
    label: 'Click me'
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    id: 'unchecked-checkbox',
    label: 'Click me'
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    id: 'disabled-unchecked-checkbox',
    label: 'Click me'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    id: 'disabled-checked-checkbox',
    label: 'Click me'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Click me'
  },
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Checkbox {...args} checked={checked} onCheckedChange={() => {
      setChecked(!checked);
    }} />;
  }
}`,...t.parameters?.docs?.source}}};const A=["Checked","Unchecked","DisabledChecked","DisabledUnchecked","Controlled"];export{r as Checked,t as Controlled,o as DisabledChecked,n as DisabledUnchecked,d as Unchecked,A as __namedExportsOrder,z as default};
