<template>
    <header class="header">
        <div class="nav--pc h-100 grid wide">
            <div class="row h-100">
                <div class="nav-pc__list nav-pc__list--left h-100 col col-9 md-9 lg-9">
                    <div class="logo__container w-30 h-100">

                        <router-link :to="{ name: 'home' }" class="categories-item__link">
                            <p class="frame__name"> Huī<span>Tài Láng();</span></p>
                        </router-link>

                        
                    </div>

                    <ul class="categories w-70">
                        <div class="row h-100 text-center">
                            <li class="categories__item col col-3 md-3 lg-3">
                                <router-link :to="{ name: 'home' }" class="categories-item__link">
                                    TRANG CHỦ
                                </router-link>
                            </li>

                            <li class="categories__item  col col-3 md-3 lg-3">
                                <router-link :to="{ name: 'course' }" class="categories-item__link">
                                    KHÓA HỌC
                                </router-link>
                            </li>

                            <li class="categories__item  col col-3 md-3 lg-3">
                                <router-link :to="{ name: 'roadmap' }" class="categories-item__link">
                                    LỘ TRÌNH
                                </router-link>
                            </li>

                            <li class="categories__item  col col-3 md-3 lg-3">
                                <router-link :to="{ name: 'blog' }" class="categories-item__link">
                                    BLOG
                                </router-link>
                            </li>

                           
                        </div>
                    </ul>
                </div>

                <div class="nav-pc__list nav-pc__list--right h-100 col col-2 md-2 lg-2 col-o-1 md-o-1 lg-o-1">
                    <div class="auth-btn__wrapper h-100">
                        <button type="button" class="nav-auth__btn w-70 h-60">
                            <router-link :to="{ name: 'register' }" class="nav-auth__link">
                                Đăng nhập
                            </router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="nav-mobile__wrapper h-100 grid wide">
            <div class="row w-100 h-100">
                <label for="nav-mobile__input" class="nav__bars-btn col col-1 md-1">
                    <font-awesome-icon :icon="['fas', 'bars']" class="menu__icon w-70 h-70" />
                </label>

                <div class="nav-mobile__logo h-100 col col-4 md-5 col-o-2 md-o-1">
                    <img src="../assets/images/NISMO.png" alt="logo" class="logo__img w-100 h-100">
                </div>

                <div class="categories--auth h-100 col col-3 md-3 col-o-2 md-o-2">
                    <div class="row">
                        <button type="button" class="nav-auth__btn w-100 h-60">
                            <router-link :to="{ name: 'login' }" class="nav-auth__link">
                                Đăng nhập
                            </router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <input type="checkbox" hidden class="nav-mobile__input" id="nav-mobile__input">
        <label for="nav-mobile__input" class="overlay--nav"></label>

        <nav class="nav--mobile">
            <label for="nav-mobile__input" class="btn__close">
                <font-awesome-icon :icon="['fas', 'times']" />
            </label>
            <ul class="nav-mobile__list">
                <li class="nav-mobile__item">
                    <font-awesome-icon :icon="['fas', 'home']" />
                    <router-link :to="{ name: 'home' }" class="nav-mobile__link">TRANG CHỦ</router-link>
                </li>
                <li class="nav-mobile__item">
                    <font-awesome-icon :icon="['fas', 'graduation-cap']" />
                    <router-link :to="{ name: 'home' }" class="nav-mobile__link">KHÓA HỌC</router-link>
                </li>
                <li class="nav-mobile__item">
                    <font-awesome-icon :icon="['fas', 'road']" />
                    <router-link :to="{ name: 'home' }" class="nav-mobile__link">LỘ TRÌNH</router-link>
                </li>
                <li class="nav-mobile__item">
                    <font-awesome-icon :icon="['fas', 'chalkboard-teacher']" />
                    <router-link :to="{ name: 'home' }" class="nav-mobile__link">GIÁO VIÊN</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/grid.scss';
.frame__name {
    color: #fff;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    margin-top: 18px;
}
.header {
    height: $height-header-nav;
    background-color: #121212;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 13;
}

.nav-pc__list--left {
    display: flex !important;
}

.items__wrapper {
    display: flex;
    align-items: center;
}

.logo__container {
    max-height: $height-logo;
}

.categories {
    list-style: none;

    .row {
        align-items: center;
    }
}

.categories__item {
    font-family: 'Poppins', sans-serif;
}

.categories-item__link {
    color: $white-color;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;

    &:hover {
        color: #4bb6b7;
    }
}

.categories-item--active .categories-item__link {
    color: $red-dark-color;
}

.categories--auth .row {
    width: 80%;
    height: 100%;
    float: right;
}

.nav-pc__list--right .row {
    align-items: center;
    justify-content: flex-end;
}

.nav-auth__link {
    text-decoration: none;
    color: $white-color;
}

.auth-btn__wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.nav-auth__btn {
    background-color: #4bb6b7;
    border: none;
    font-size: 1.1rem;
    border-radius: 25px;
    cursor: pointer;

    &:hover {
        background: #fff;

        .nav-auth__link {
            color: $black-color;
        }
    }
}

.nav-mobile__wrapper {
    display: none;

    .row {
        align-items: center;
    }
}

.nav__bars-btn {
    color: $white-color;
    cursor: pointer;
}

.overlay--nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #4bb6b7;
}

.nav--mobile {
    background-color: antiquewhite;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 50%;
    max-width: 80%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform linear .8s, opacity linear .8s;
}

.nav-mobile__list,
.nav-mobile__item {
    text-align: center;
}

.nav-mobile__list {
    margin-top: 4rem;
}

.nav-mobile__item {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem 0;

    &:hover {
        background-color: rgb(244, 211, 167);
    }
}

.nav-mobile__link {
    text-decoration: none;
    color: $black-color;
    margin-left: 16px;
}

.btn__close {
    position: absolute;
    font-size: 1.3rem;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    opacity: 1;

    &:hover {
        opacity: 0.6;
    }
}

@media (max-width: 1023px) {
    #nav-mobile__input:checked~.overlay--nav {
        display: block;
    }

    #nav-mobile__input:checked~.nav--mobile {
        transform: translateX(0);
        opacity: 1;
    }

    .nav--pc {
        display: none;
    }

    .nav-mobile__wrapper {
        display: block;
    }
}

@media (min-width: 740px) and (max-width: 1023px) {
    .categories--auth .row {
        width: 82%;
    }
}

@media (max-width: 739px) {
    .menu__icon {
        float: right;
    }

    .nav-auth__btn {
        font-size: 0.9rem;
        width: 90%;
    }

    .categories--auth .row {
        width: 100%;
    }

    .nav--mobile {
        width: 75%;
    }
}

span {
    color: #4bb6b7;
}
</style>