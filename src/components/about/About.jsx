import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
	return (
		<section id="about">
			<h5>Узнать</h5>
			<h2>Обо мне</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About img" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>2+ Years Working</small>
						</article>

						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>10+ Worldwide</small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Project</h5>
							<small>20+ Completed</small>
						</article>
					</div>
					<p>
						Добрый день, меня зовут Владимир, опыт работы 2 года в сфере frontend разработки.
						<br />
						<br />
						Основные навыки и умения: Уверенное владение HTML, БЭМ, CSS, CSS-препроцессоры,
						Bootstrap, кроссбраузерная и адаптивная верстка, Сборщики. JavaScript + es6, JQuery,
						React, Redux, Redux-toolkit, Git, typescript
						<br />
						<br />
						Усидчив. Внутри меня живет перфекционист, который не дает делать работу "кое-как".
						Всегда стараюсь искать новые подходы в работе и применять их на практике. Тащусь от
						крутых дизайнов в связке с динамикой.
						<br />
						<br />
						В свободное время занимаюсь чтением, просмотром полезной информации для себя. Читаю
						художественную литературу, занимаюсь спортом. Всегда стараюсь развиваться и не стоять на
						месте
						<br />
					</p>
					<h4 className="about__experience-title">Опыт работы</h4>
					<div></div>
					<p>
						<span
							style={{ fontWeight: 700, color: "#bcb8b8eb", fontSize: "18px" }}
						>
							Декабрь 2020 — Июнь 2021
						</span>{" "}
						<br />
						Clishin Agency Frontend-разработчик <br />- Верстка сайтов из
						предоставленных дизайнером макетов (PSD). <br />- Адаптивная,
						кроссбраузерня верстка. <br />- Верстка e-mail. <br />-
						Программирование поведения элементов. <br />- Анимация элементов
						(css3, js). - Оптимизация скорости загрузки сайтов. <br />
						Технологии: JS, jQuery, gulp, gsap, sass, axios, bootstrap , grid.
					</p>
					<p>
						<span
							style={{ fontWeight: 700, color: "#bcb8b8eb", fontSize: "18px" }}
						>
							Июль 2021 — Сентябрь 2022
						</span>{" "}
						<br />
						Elecsnet Frontend-разработчик <br />
						1.Участие в проектировании Web-сайтов; web-приложений и сервисов
						(разработка архитектуры и алгоритмики продукта, поиск
						сбалансированных решений и их эффективная реализация);
						<br />
						2.Верстка сайтов, шаблонов, e-mail рассылок, промо-страниц (Landing
						Page);
						<br />
						3.Разработка интерактивных элементов на основе дизайн-макетов;
						<br />
						4.Привязка к пользовательскому интерфейсу скриптов, которые
						обеспечивают визуализацию и анимацию страниц сайта; <br />
						5.Оптимизация и расширение функционала имеющегося кода;
						<br />
						6.Обеспечение необходимого уровня пользовательского интерфейса (User
						Interface) и опыта взаимодействия (User Experience);
					</p>
					<p>
						<span
							style={{ fontWeight: 700, color: "#bcb8b8eb", fontSize: "18px" }}
						>
							Ноябрь 2022 — Май 2023
						</span>{" "}
						<br />
						Verv Frontend-разработчик <br />
						Разработка командного проекта по инвестициям, на архитектуре Next -
						приложение с использованием стейт менеджера Redux toolkit. В данном
						проекте я принимал участие в качестве frontend-разработчика. В
						проекте реализован следующий функционал: авторизация/регистрация
						(через Metamask); есть инвесторская и админ часть с разными Layout;3
						формы для создания валюты внутри сайта с помощью React-hook-form с
						валидацией Yup, так-же страница с редактированием уже существующей
						валюты; страница с таблицей всех созданных валют; 5-ти шаговое
						создание инвестиций; работа с сервером(виды запросы были в swagger)
						через RTK-query;отлавливание ошибок с помощью react-toastify;стили
						были реализованы через styled-in-js; также использовали mui;
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	)
}

export default About
