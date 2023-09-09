<template>
  <div class="slogan grid wide">
    <div class="row">
      <div class="title__wrapper col lg-6 md-6 col-10">
        <h3 class="slogan__title w-40">About me</h3>
        <span class="slogan__line w-60"></span>
      </div>
    </div>

    <div class="row">
      <div class="col col-3 md-3 lg-3 col-o-1 md-o-1 lg-o-1 h-50">
        <img class="avatar" src="../assets/images/soi.jpg" alt="#">
      </div>

      <div class="col col-7 md-0 lg-0">
        <p class="content">
          &emsp;&emsp;Hi everyone! My name is Huī Tài Láng. I'm a web developer from Bogor, West
          Java. I
          have 1 year of
          experience in back-end web development. I really enjoy what I do right now, in my opinion, creating
          programs is not just a job, but also an art that has aesthetic value
        </p>
      </div>

      <div class="col col-0 md-7 lg-6">
        <p class="content">
          &emsp;&emsp;Hi everyone! My name is  Huī Tài Láng. I'm a web developer from Bogor, West
          Java. I
          have 1 year of
          experience in back-end web development. I really enjoy what I do right now, in my opinion, creating
          programs is not just a job, but also an art that has aesthetic value.
        </p>
        <p class="content">
          &emsp;&emsp;My job is to build your website to be functional and user-friendly yet still attractive. In
          addition, I
          provide a personal touch to your product and ensure that the website catches attention and is easy to
          use. My goal is to convey your message and identity in the most creative way. If you are interested in
          hiring me, please contact the listed contact.
        </p>
      </div>
    </div>
  </div>


  <div class="frame grid wide">
    <div class="frame__course row">
      <div class="col lg-3">
        <div class="coure">
          <div class="row">
            <div class="col lg-4">
              <img class="frame__image" src="../assets/images/html.png" alt="">
            </div>
            <div class="col lg-8">
              <h3>HTML</h3>
              <p>HyperText Markup Language</p>
            </div>

          </div>
        </div>
      </div>

      <div class="col lg-3">
        <div class="coure">
          <div class="row">
            <div class="col lg-4">
              <img class="frame__image" src="../assets/images/css.png" alt="">
            </div>
            <div class="col lg-8">
              <h3>CSS</h3>
              <p>Cascading Style Sheets</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col lg-3">
        <div class="coure">
          <div class="row">
            <div class="col lg-4">
              <img class="frame__image" src="../assets/images/js.jpg" alt="">
            </div>
            <div class="col lg-8">
              <h3>JAVASCRIPT</h3>
              <p>Cascading Style Sheets</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col lg-3">
        <div class="coure">
          <div class="row">
            <div class="col lg-4">
              <img class="frame__image" src="../assets/images/vue.png" alt="">
            </div>
            <div class="col lg-8">
              <h3>VUE</h3>
              <p>Cascading Style Sheets</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="frame__course row">
      <div class="col lg-3">
        <div class="coure">
          <div class="row">
            <div class="col lg-4">
              <img class="frame__image" src="../assets/images/re.png" alt="">
            </div>
            <div class="col lg-8">
              <h3>REACT</h3>
              <p>HyperText Markup Language</p>
            </div>

          </div>
        </div>
      </div>

      <div class="col lg-3">
        <div class="coure">
          <div class="row">
            <div class="col lg-4">
              <img class="frame__image" src="../assets/images/node.png" alt="">
            </div>
            <div class="col lg-8">
              <h3>NODE JS</h3>
              <p>Cascading Style Sheets</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col lg-3">
        <div class="coure">
          <div class="row">
            <div class="col lg-4">
              <img class="frame__image" src="../assets/images/c++.png" alt="">
            </div>
            <div class="col lg-8">
              <h3>C++</h3>
              <p>Cascading Style Sheets</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col lg-3">
        <div class="coure">
          <div class="row">
            <div class="col lg-4">
              <img class="frame__image" src="../assets/images/python.png" alt="">
            </div>
            <div class="col lg-8">
              <h3>PYTHON</h3>
              <p>Cascading Style Sheets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/grid.scss';

.slogan {
  height: 420px;
  background-color: $dark-color;
  border-radius: 25px;
}

.title__wrapper {
  display: flex !important;
  align-items: baseline;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.slogan__line {
  border-bottom: 3px solid #fffbeb;
}

.slogan__title {
  text-align: center;
  font-size: 1.25rem;
  font-family: 'Poppins', sans-serif;
  color: $white-color;
}

.avatar {
  border-radius: 50%;
  width: 85%;
}

.content {
  font-size: 1.22rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  text-align: justify;
  color: #fffbeb;
}

@media (min-width: 1024px) and (max-width: 1239px) {
  .content {
    font-size: 1.1rem;
  }
}

@media (max-width: 1023px) {
  .content {
    font-size: 0.9rem;
  }
}

@media (min-width: 740px) and (max-width: 1023px) {
  .avatar {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 739px) {
  .slogan {
    height: 300px;
  }
}

//Course

.coure {
  background-color: #121212;
  height: 100px;
  border-radius: 10px;
}

span {
  color: #fff;
  line-height: 260px;

}

.frame__course {
  margin-top: 30px;
}

.frame__image {
  padding-top: 15px;
  max-width: 100%;
  max-height: 100%;
}

h3,
p {
  color: #fff;
  text-align: center;
  font-family: 'Poppins', sans-serif;

}
</style>