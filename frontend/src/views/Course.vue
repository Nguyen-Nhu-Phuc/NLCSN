<template>
    <div class="frame grid wide">
        <div class="frame__course row">
            <div class="col lg-3">
                <div class="coure" v-for="course in courses" :key="course._id">
                    <div class="row">
                        <div class="course__content col lg-6 col-o-3">
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
                const response = await axios.get(`${this.urlServer}/api/course/stored`); // Thay đổi đường dẫn API của bạn
                this.courses = response.data; // Gán dữ liệu từ MongoDB vào biến courses
                console.log(this.courses);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ MongoDB:', error);
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
    max-width: 129px;
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
</style>