export class KVOperater {
  constructor ({ namespace }) {
    if (namespace == null) throw new TypeError('namesapce is a required option')
  }
}
