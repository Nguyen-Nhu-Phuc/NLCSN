<template>
    <div class="frame grid wide">
        <div class="frame__course row">
            <div class="col lg-3" v-for="course in courses" :key="course._id">
                <!-- <div class="coure">
                    <div class="course__content">
                        <img class="frame__image" :src="course.image" alt="">
                    </div>
                    <div class="course__title col lg-8 col-o-2">
                        <h3>{{ course.name }}</h3>
                        <p>{{ course.description }}</p>
                        <br>
                        <hr><br>
                    </div>
                    <div class="course__user col lg-5">
                        <img class="user__image" :src="course.image" alt="">
                    </div>
                    <div class="user__name col lg-7">
                        <p>{{ course.userName }}</p>
                    </div>
                </div> -->

                <div class="card">
                    <img class="frame__image" :src="course.image" alt="">
                    <div class="card__content">
                        <p class="card__title">{{ course.name }}</p>
                        <p class="card__description">{{ course.description }}</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            courses: [], // Mảng chứa dữ liệu khóa học từ MongoDB
        };
    },
    computed: {
        urlServer() {
            return import.meta.env.VITE_APP_URL_SERVER;
        }
    },

    mounted() {
        // Gọi phương thức để lấy dữ liệu từ MongoDB khi component được mounted
        this.fetchCourses();
    },
    methods: {
        async fetchCourses() {
            try {
                const res = await axios.get(`${this.urlServer}/api/course/stored`); // Thay đổi đường dẫn API của bạn
                this.courses = res.data; // Gán dữ liệu từ MongoDB vào biến courses
                console.log(this.courses);
            } catch (error) {
                console.error('Error get data from MongoDB:', error);
            }
        },
    },
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/grid.scss';

.coure {
    background-color: #121212;
    height: 400px;
    border-radius: 10px;
}

span {
    color: #fff;
    line-height: 300px;

}

.frame__course {
    margin-top: 30px;
}

.frame__image {
    padding-top: 8px;
    max-width: 240px;
    max-height: 137px;
}

h3,
p {
    color: #fff;
    text-align: center;
    font-family: 'Poppins', sans-serif;

}

.course__content {
    margin-top: 45px;
}

.user__image {
    width: 50px;
    height: 50px;
    border-radius: 40px;
    text-align: right;
}

hr {
    color: #fff;
}

.name__user {
    color: #fff;
    font-family: 'Poppins', sans-serif;
}

.course__user {
    text-align: right;
}

.user__name {
    padding-top: 15px;
}

//

.card {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #121212;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card svg {
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}


</style>