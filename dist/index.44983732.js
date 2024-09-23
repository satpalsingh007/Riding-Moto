var w = window.innerWidth, h = window.innerHeight, canvas = document.getElementById("test"), ctx = canvas.getContext("2d"), rate = 60, arc = 30, time, count, speed = 20, parts = new Array(), images = []; // Array to hold image objects
var mouse = {
    x: 0,
    y: 0
};
// Load your images here
var imgSources = [
    "./images/1.png",
    "2.png",
    "3.png",
    "4.png"
]; // Replace with your PNG file names
imgSources.forEach((src)=>{
    var img = new Image();
    img.src = src;
    images.push(img);
});
canvas.setAttribute("width", w);
canvas.setAttribute("height", h);
function create() {
    time = 0;
    for(var i = 0; i < arc; i++)parts[i] = {
        x: Math.ceil(Math.random() * w),
        y: Math.ceil(Math.random() * h),
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        img: images[Math.floor(Math.random() * images.length)],
        size: Math.random() * 30 + 10
    };
}
function particles() {
    ctx.clearRect(0, 0, w, h);
    canvas.addEventListener("mousemove", MouseMove, false);
    for(var i = 0; i < arc; i++){
        var li = parts[i];
        // Draw the image without scaling based on mouse distance
        ctx.drawImage(li.img, li.x, li.y, li.size, li.size);
        li.x += li.toX * (time * 0.05);
        li.y += li.toY * (time * 0.05);
        // Wrap around logic
        if (li.x > w) li.x = 0;
        if (li.y > h) li.y = 0;
        if (li.x < 0) li.x = w;
        if (li.y < 0) li.y = h;
    }
    if (time < speed) time++;
    setTimeout(particles, 1000 / rate);
}
function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;
}
_c = MouseMove;
function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
_c1 = DistanceBetween;
create();
particles();
var _c, _c1;
$RefreshReg$(_c, "MouseMove");
$RefreshReg$(_c1, "DistanceBetween");

//# sourceMappingURL=index.44983732.js.map
