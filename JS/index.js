const carousel = document.querySelector(".slider-carousel");
const arrowBtns = document.querySelectorAll(".container-wrapper i");

// Hàm xử lý chuyển động sang phải (Next)
const nextSlide = () => {
    // Lấy phần tử đầu tiên
    const firstItem = carousel.querySelector(".image-item");
    
    // Tạo hiệu ứng trượt mượt mà
    carousel.style.transition = "all 0.5s ease-in-out";
    
    // Đưa phần tử đầu tiên ra sau cùng
    carousel.appendChild(firstItem);
};

// Hàm xử lý chuyển động sang trái (Prev)
const prevSlide = () => {
    // Lấy phần tử cuối cùng
    const lastItem = carousel.querySelector(".image-item:last-child");
    
    // Đưa phần tử cuối cùng lên đầu tiên
    carousel.prepend(lastItem);
};

// 1. Sự kiện Click cho nút mũi tên
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("fa-arrow-left")) {
            prevSlide();
        } else {
            nextSlide();
        }
        
        // Reset lại thời gian tự động chạy khi click
        clearInterval(autoPlayInterval);
        startAutoPlay();
    });
});

// 2. Tự động chạy sau mỗi 3 giây
let autoPlayInterval;
const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    },3000);
};

// Khởi chạy lần đầu
startAutoPlay();

// (Tùy chọn) Dừng khi di chuột vào và chạy lại khi bỏ chuột ra
carousel.addEventListener("mouseenter", () => clearInterval(autoPlayInterval));
carousel.addEventListener("mouseleave", startAutoPlay);