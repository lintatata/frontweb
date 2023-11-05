// 表单页JavaScript文件
function $(selector) {
  return document.querySelector(selector);
}

function previewFile() {
    var preview = $("#preview");
    var file = $("#upload").files[0];
    var uploadEL = $("#upload");
    //uploadEL.addEventListener('change',function(){
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          console.log("显示图片")
          preview.src = reader.result;
        });
    
      if (file) {
        reader.readAsDataURL(file);
      }
    //});
    
  }
  async function uploadFile(){
    const name = $("#name").value.trim();
    const photographer = $("#photographer").value.trim();
    const desc = $("#desc").value.trim();
    const fileObj = $("#upload").files[0];
    if (!fileObj) {
      alert('请选择图片');
      return;
    }

    if (!name) {
        alert('请输入名称');
        return;
    }

    if (!photographer) {
        alert('请输入拍摄者');
        return;
    }
    if (!desc) {
        alert('请输入描述信息');
        return;
    }
    const form = new FormData();
    form.append("file", fileObj); // 文件对象
    form.append("name", name);
    form.append("photographer", photographer);
    form.append("desc", desc);

    console.log('表单内容',{ fileObj, name, photographer, desc });
    try {
      const response = await fetch('/pic/upload',{
        method: 'POST',
        body: form,
      });

      console.log("状态码",response.status);
      const result = await response.json();
      if (result.success){
        alert("上传成功！");
        location.href = "index.html";
        return;

      }
      
    } catch (e) {
      console.error("上传失败", e);
      
    }
    alert("上传失败！")
  }





  