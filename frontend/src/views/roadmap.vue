<template>
    <div class="grid wide">
        <div class="road__title">
            <h2>Lộ Trình Học</h2>
            <br>
            <p>Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí "Lập trình
                viên Front-end" bạn nên tập trung vào lộ trình "Front-end".</p>
        </div>
        <div class="row">
            <div class=" col lg-6">
                <div class="road_frame">
                    <div class="row">

                        <div class="road__main  col lg-8">
                            <div class="road__main--frame">
                                <h3>Lộ trình học Front-end</h3>
                                <br>
                                <p>Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ
                                    chia
                                    sẻ
                                    cho bạn lộ trình để trở thành lập trình viên Front-end nhé.</p>
                                <div class="row">
                                    <div class=" col lg-3">
                                        <img class="road__icon" src="../assets/images/html_link.png" alt="">
                                    </div>
                                    <div class=" col lg-3">
                                        <img class="road__icon" src="../assets/images/gird.png" alt="">
                                    </div>
                                    <div class=" col lg-3">
                                        <img class="road__icon" src="../assets/images/jsr.png" alt="">
                                    </div>
                                    <div class=" col lg-3">
                                        <img class="road__icon" src="../assets/images/ra.png" alt="">
                                    </div>
                                </div>

                                <div class="frame__but row">
                                    <button class="button2">
                                        Xem chi tiết
                                    </button>
                                    <!-- <div class="road__but--frame col lg-6">
                                    <button class="road__but" type="button">Xem chi tiết</button>
                                </div> -->
                                </div>
                            </div>
                        </div>
                        <div class=" col lg-4">
                            <img src="../assets/images/front_end.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col lg-6">
                <div class="road_frame">
                    <div class="row">

                        <div class="road__main  col lg-8">
                            <div class="road__main--frame">
                                <h3>Lộ trình học Back-end</h3>
                                <br>
                                <p>Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc
                                    thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.
                                </p>
                                <div class="row">
                                    <div class=" col lg-3">
                                        <img class="road__icon" src="../assets/images/nj.png" alt="">
                                    </div>
                                    <div class=" col lg-3">
                                        <img class="road__icon" src="../assets/images/jsr.png" alt="">
                                    </div>
                                    <div class=" col lg-3">
                                        <img class="road__icon" src="../assets/images/jsr.png" alt="">
                                    </div>
                                    <div class=" col lg-3">
                                        <img class="road__icon" src="../assets/images/html_link.png" alt="">
                                    </div>
                                </div>

                                <div class="frame__but row">
                                    <button class="button2">
                                        Xem chi tiết
                                    </button>
                                    <!-- <div class="road__but--frame col lg-6">
                                    <button class="road__but" type="button">Xem chi tiết</button>
                                </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="col lg-4">
                            <img src="../assets/images/back_end.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="road__title">
            <h2>Tham gia cộng đồng học viên F8 trên Facebook</h2>
            <br>
            <p>Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá
                trình học nhé.</p>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import '../assets/styles/grid.scss';

.road_frame {
    border-radius: 10px;
    border: 2px solid gray;
    height: 255px;
}

.road__title {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 50px;
}

.road__main {
    font-family: 'Poppins', sans-serif;
}

.road__but {
    border-radius: 3px;
    border: 2px solid black;
}

.road__but--frame {
    text-align: center;
    margin-bottom: 15px;
}




.button2 {
    text-align: center;
    display: inline-block;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    box-shadow: 6px 6px 12px #c5c5c5,
        -6px -6px 12px #ffffff;
}

.button2:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5,
        inset -4px -4px 12px #ffffff;
}

.button2:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
}

.button2:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #009087;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
}

.button2:hover {
    color: #ffffff;
    border: 1px solid #009087;
}

.button2:hover:before {
    top: -35%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
    top: -45%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.frame__but {
    padding-left: 55px;
}

.road__main--frame {
    padding-left: 13px;
}
</style>