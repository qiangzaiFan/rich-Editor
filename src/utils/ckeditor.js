export default class uploadImageAdapter {
  constructor(loader) {
    this.loader = loader
  }

  async upload() {
    //获取到用户上传的文件
    const image = await this.loader.file
    const formData = new FormData()

    formData.append('file', image)
    /***
     * axios实现上传逻辑
     *
     */

    //返回的结果格式化一下,把url传到下面的json中
    let resultJson = { uploaded: 1, url: '/' }

    return resultJson
  }

  abort() {}
}
