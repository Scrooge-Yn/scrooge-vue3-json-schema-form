const Ajv = require('ajv')
const localize = require('ajv-i18n')

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      test: false,
      errorMessage: '没有通过校验',
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    isWorker: {
      type: 'boolean',
    },
  },
  required: ['name', 'age'],
}

const ajv = new Ajv()
ajv.addKeyword({
  keyword: 'test',
  macro() {
    return {
      minLength: 10,
    }
  },
})

const validate = ajv.compile(schema)
const valid = validate({
  name: 'yuning',
  age: 28,
  pets: ['huangdi', 'fuerdai'],
  isWorker: true,
})
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
}
