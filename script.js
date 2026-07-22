// كود الموقع كامل

document.addEventListener('DOMContentLoaded', function() {
    // لو المستخدم مسجل دخول وهو في الصفحة الرئيسية يحولو لـ home
    let currentUser = localStorage.getItem('currentUser');
    let pageName = window.location.pathname.split('/').pop();
    
    if (currentUser && pageName === 'index.html') {
        window.location.href = 'home.html';
    }
    
    console.log('JobFinder شغال تمام 🚀');
});

// دالة تسجيل الخروج - ختيها في كل الصفحات
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
