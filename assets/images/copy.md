 <main id="main">

        <!-- ESTRUCTURA DEVESTEVENSON -->

        <nav class="navbar">
            <div class="nav__container">
                <a href="/" class="nav__logo" data-aos="zoom-in" data-aos-duration="800"
                    data-value="PUESCÓDIGO">PUESCÓDIGO</a>
            </div>
        </nav>

        <section class="hero">
            <div class="hero__container">
                <div class="hero__title">
                    <h1 class="hero__title__header"><span class="espa">PUESCÓDIGO</span></h1>
                </div>
                <div class="hero__subtitle" data-aos="fade-up" data-aos-duration="1200">
                    <h2 class="hero__subtitle__header text2"> JOVENES APASIONADOS <br> POR LA <span>PROGRAMACIÓN</span>
                    </h2>
                </div>
                <div class="hero__image" data-aos="zoom-in" data-aos-duration="800">
                    <img src="./assets/images/banner.jpg" alt="">
                </div>
            </div>
        </section>

        <section class="about">
            <div class="about__container">
                <div class="about__text">

                    <p class="about__paragraph__one about__paragraph" data-aos="fade-up" data-aos-duration="800">
                        Queremos <span>parchar y aprender a programar</span> para contribuir a la creación de productos
                        y servicios digitales.
                    </p>

                    <p class="about__paragraph__two about__paragraph" data-aos="fade-up" data-aos-duration="900">
                        Estamos entusiasmados de utilizar nuestras habilidades para <span>resolver problemas</span> y
                        crear nuevas oportunidades.
                    </p>

                    <p class="about__paragraph__three about__paragraph" data-aos="fade-up" data-aos-duration="1000">
                        Creemos que el código es una herramienta poderosa que puede usarse para <span>hacer del mundo un
                            lugar mejor</span>.
                    </p>

                </div>
            </div>
        </section>





        <!-- ESTRUCTURA JHON -->
        <!-- <section>
            <div class="team__container">
                <div class="team__title">
                    <h2 class="team__subtitle"><span> EQUIPO </span><br> PUESCÓDIGO</h2>
                </div>
                <swiper-container class="mySwiper"
                    style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" loop="true"
                    navigation="true" space-between="30" centered-slides="false" autoplay="true" autoplay-delay="2000"
                    autoplay-disable-on-interaction="false" slides-per-view="3" pagination="false"
                    mobile-slide-per-view="1">
                    <swiper-slide data-aos="zoom-in" data-aos-duration="800" class=".swiper-slide"><img
                            src="./assets/images/photo-1.jpg" class="team__card__img" alt="">
                        <div class="team__card">
                            <h1 class="team__name">devestevenson</h1>
                            <button class="team__info">+</button>
                        </div>
                    </swiper-slide>
                    <swiper-slide data-aos="zoom-in" data-aos-duration="900" class=".swiper-slide"><img
                            src="./assets/images/photo-2.jpg" alt="">
                        <div class="team__card">
                            <h1 class="team__name">padierna</h1>
                            <button class="team__info">+</button>
                        </div>
                    </swiper-slide>
                    <swiper-slide data-aos="zoom-in" data-aos-duration="1000" class=".swiper-slide"><img
                            src="./assets/images/photo-3.jpg" alt="">
                        <div class="team__card">
                            <h1 class="team__name">mishell</h1>
                            <button class="team__info">+</button>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </div>
        </section> -->
        <section>
            <div class="footer__container">
                <div class="footer__title">
                    <span>PUESCÓDIGO</span>
                </div>
                <div class="footer__contac">
                    <ul class="footer__list" data-animation="bonus">
                        <!-- <li><a href="">LINKEDIN</a></li> -->
                        <li><a href="https://github.com/puescodigo">GITHUB</a></li>
                        <li><a href="">+57 305 330 7402</a></li>
                        <li><a href="">CLUBPUESCODIGO@GMAIL.COM</a></li>
                    </ul>
                </div>
            </div>
        </section>






    </main>

















    /* NAV */
.nav__container {
    width: 100%;
    height: 10.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10.4rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* NAV LOGO */
.nav__logo {
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    padding: .8rem 1.6rem;
    border: .2rem solid var(--white-);
    border-radius: 3rem;
}

/* HERO */
.hero__title {
    overflow: hidden;
}
.hero__title__header {
    font-size: clamp(2rem, 14cqi, 20rem);
    text-align: center;
    line-height: 1;
    color: var(--white-);
    margin-bottom: 4rem;
}
.hero__title__header span {
    font-weight: 700;
    display: inline-block;
    transform: translateY(120%);
}
.hero__subtitle {
    display: flex;
    justify-content: center;
}
.hero__subtitle__header {
    font-size: clamp(2.4rem, 4cqi, 8rem);
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 12.8rem;
    color: var(--white-);
}
.hero__subtitle__header span {
    color: var(--green-);
    font-weight: 600;
}
.hero__image {
    width: 100%;
    max-width: 1280px;
    height: 600px;
    overflow: hidden;
    margin: auto;
}
.hero__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* ABOUT TEXT */
.about__container {
    display: flex;
    justify-content: center;
    margin: 18.4rem 0;
}
.about__paragraph {
    color: var(--white-);
    font-size: clamp(2.4rem, 2.3cqi, 8rem);
    text-transform: uppercase;
    font-weight: 400;
    text-align: center;
}
.about__paragraph__one {
    max-width: 84rem;
}
.about__paragraph__two {
    max-width: 87rem;
    margin: 3.2rem 0;
}
.about__paragraph__three {
    max-width: 82rem;
}
.about__paragraph span {
    color: var(--green-);
    font-weight: 600;
}



/* responsive */
@media(max-width: 480px) {
    .nav__container {
        margin-bottom: 6.4rem;
    }
    .hero__title__header {
        margin-bottom: 2.4rem;
    }
    .hero__subtitle__header {
        margin-bottom: 7.2rem;
    }
    .about__container {
        margin: 16.8rem 0;
    }
}










/* ESTILOS JHON */
.team__title {
    display: flex;
    max-width: max-content;
    margin-left: 51%;
    margin-top: 18.4rem;
}
.team__subtitle{
    font-size: clamp(5rem, 4cqi, 6rem);
    font-weight: 700;
    line-height: 1.1;
}
.team__subtitle span{
    font-weight: 700;
    line-height: 1.1;
    color: var(--grey-);
}
swiper-container {
    max-width: 130.2rem;
    width: 100%;
    height: 40.8rem;
    margin-top: 4.8rem;
    margin-left: 90px;
}
swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
swiper-slide img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    position: relative;
    overflow: hidden;
}
.team__card{
    width: 100%;
    height: 100%;
    top: 100%;
    right: 0;
    position: absolute;
    backdrop-filter: blur(0);
    padding: 3rem;
    color: var(--black-);
    display: flex;
    gap: .8rem;
    align-items: end;
}
swiper-slide:hover .team__card {
    top: 0;
    filter: grayscale(1);
    transition: top .1s;
}
.team__name{
    text-transform: uppercase;
    font-size: 2.4rem;
    background: var(--white-);
    height: 3.7rem;
    width: 20.8rem;
    max-width: max-content;
    padding: 0px 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.team__info{
    color: var(--black-);
    background: var(--white-);
    font-size: 2.7rem;
    padding: 0rem 2rem;
    border: none;
    outline: none;
    cursor: pointer;
    height: 3.7rem;
}
.team__profile{
    color: var(--green-);
    position: absolute;
    font-size: clamp(3.6rem, 4cqi, 3.6rem);
    font-weight: 400;
    display: none;
    line-height: 1.4;
    margin-top: 30rem;
    margin-left: -2rem;
}
.footer__container{
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    height: auto;
    margin: 18.4rem auto 18.4rem auto;

}
.footer__title span{
    font-weight: 700;
    font-size: clamp(3rem, 4cqi, 3.6rem);
    color: var(--green-);
    margin-left: -1rem;
    margin-right: -10rem;
}
.footer__contac a{
    display: flex;
    flex-direction: column;
    font-size: clamp(3rem, 4cqi, 3.6rem);
    font-weight: 400;
    line-height: 1.4;
    color: var(--white-);
}
.footer__list a {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
    max-width: max-content;
}
.footer__list a:hover, a:focus {
    background-size: 100% 2px;
}
@media screen and (max-width: 480px){
    .team__title{
        margin:0;
    }
    swiper-container {
        margin-left: 0rem;
    }
    .footer__container{
        display: flex;
        flex-direction: column;
        margin: 18.4rem auto 15.4rem 1rem;
    }
    .footer__contac{
        margin-top: 2rem;
    }
}