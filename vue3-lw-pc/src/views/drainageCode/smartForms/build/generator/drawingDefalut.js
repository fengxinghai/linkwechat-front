// 默认表单配置项
export default [
  {
    formCodeId: 11,
    label: '姓名',
    //文字说明
    captions: '',
    tag: 'el-input',
    tagIcon: 'input',
    layout: 'colFormItem',
    placeholder: '请输入你的名字',
    defaultValue: undefined,
    span: 24,
    labelWidth: null,
    style: { width: '100%' },
    clearable: true,
    prepend: '',
    append: '',
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': true,
    readonly: false,
    disabled: false,
    required: true,
    regList: [],
    changeTag: true,
    renderKey: +new Date(),
  },
  {
    formCodeId: 5,
    layout: 'colFormItem',
    tagIcon: 'phone',
    label: '手机号',
    //文字说明
    captions: '',
    tag: 'el-input',
    placeholder: '请输入手机号',
    defaultValue: '',
    span: 24,
    style: { width: '100%' },
    clearable: true,
    prepend: '',
    append: '',
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: 11,
    'show-word-limit': true,
    change: 'change',
    readonly: false,
    disabled: false,
    required: true,
    changeTag: true,
    regList: [
      {
        pattern: /^1[^012]\d{9}$/, // 匹配的字符串或正则表达式 传递给string.match()校验
        message: '手机号格式错误',
      },
    ],
    renderKey: +new Date(),
  },
]
