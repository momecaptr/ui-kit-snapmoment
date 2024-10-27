import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as n}from"./index-BP8_t0zE.js";import{c as o}from"./clsx-B-dksMZM.js";const v="_boxTextArea_81y2h_1",S="_error_81y2h_16",j="_resize_81y2h_27",E="_label_81y2h_32",q="_counterValue_81y2h_38",e={boxTextArea:v,error:S,resize:j,label:E,counterValue:q},T=n.forwardRef((a,C)=>{const{callback:R,className:g,classNameTextAreaSize:u,counterValue:m,currentValue:f,error:s,id:A,label:p,placeholder:h,resize:_,...z}=a,[V,x]=n.useState(f||"");function y(b){a.onChange?.(b),x(b.target.value)}n.useEffect(()=>{a.currentValue===""&&x("")},[a.currentValue]);const N=n.useId();let t="";return s?t=o(e.boxTextArea,e.error,u):t=o(e.boxTextArea,u),r.jsxs("div",{className:o(e.box,g),children:[p&&r.jsx("div",{className:s?e.error:e.label,children:p}),r.jsxs("div",{children:[r.jsx("textarea",{...z,className:_?o(t,e.resize):t,id:A??N,onChange:y,placeholder:h,value:V}),m&&r.jsx("div",{className:e.counterValue,children:m})]}),s&&r.jsx("div",{className:e.error,children:s})]})});T.__docgenInfo={description:`Компонент \`TextArea\` — это расширяемое текстовое поле с поддержкой:\r
- кастомного размера через \`classNameTextAreaSize\`\r
- счетчика символов с помощью \`counterValue\`\r
- управления значением через \`currentValue\`\r
- отображения ошибки через \`error\`\r
- отображения заголовка через \`label\`\r
- настройки возможности изменения размера через \`resize\`\r
\r
@param {function} callback - Опциональная функция для обработки изменения текста.\r
@param {string} classNameTextAreaSize - Дополнительный класс для изменения размера textarea.\r
@param {string} counterValue - Значение для отображения счетчика символов.\r
@param {string} currentValue - Текущее значение textarea.\r
@param {string} error - Ошибка для отображения под textarea.\r
@param {string} label - Заголовок, отображаемый над textarea.\r
@param {boolean} resize - Включение/выключение возможности изменения размера textarea.\r
@param {ComponentPropsWithoutRef<'textarea'>} restProps - Остальные стандартные свойства элемента <textarea>.`,methods:[],displayName:"TextArea",props:{callback:{required:!1,tsType:{name:"signature",type:"function",raw:"(text: string) => void",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"void"}}},description:""},classNameTextAreaSize:{required:!1,tsType:{name:"string"},description:""},counterValue:{required:!1,tsType:{name:"string"},description:""},currentValue:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},resize:{required:!1,tsType:{name:"boolean"},description:""}}};const w={component:T,tags:["autodocs"],title:"Components/textArea"},l={args:{disabled:!1,label:"TextArea",placeholder:"TextArea"}},c={args:{disabled:!1,error:"Error!",label:"TextArea",placeholder:"TextArea"}},i={args:{disabled:!1,label:"TextArea",placeholder:"TextArea",resize:!0}},d={args:{disabled:!0,label:"TextArea",placeholder:"TextArea"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'TextArea',
    placeholder: 'TextArea'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    error: 'Error!',
    label: 'TextArea',
    placeholder: 'TextArea'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'TextArea',
    placeholder: 'TextArea',
    resize: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'TextArea',
    placeholder: 'TextArea'
  }
}`,...d.parameters?.docs?.source}}};const P=["Default","Error","NotResize","Disable"];export{l as Default,d as Disable,c as Error,i as NotResize,P as __namedExportsOrder,w as default};
