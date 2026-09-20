const form = document.getElementById("registerForm");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("username").value;
    const pwd = document.getElementById("pwd").value;
    const email = document.getElementById("email").value;
    if(!username || !pwd || !email){
        alert("所有内容不能为空！");
        return;
    }
    alert(`注册成功！用户名：${username}`);
});
