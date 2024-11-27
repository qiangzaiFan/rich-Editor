// 第三步：声明上传图片的构造函数
class UploadAdapter {
    constructor(loader) {
      this.loader = loader;
    }
  
    upload() {
      return new Promise(resolve => {
        let file = this.loader.file;
        console.log('----this.loader,',this.loader);
        let url = window.URL.createObjectURL(new Blob(file))
        
        resolve({
          default: url,
        });
      });
    }
  }
  // 第四步：导出  UploadAdapter
  export {  UploadAdapter }