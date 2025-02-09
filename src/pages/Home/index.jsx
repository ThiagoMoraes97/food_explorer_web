import { Container, Main } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import fruitsImg from "../../assets/fruits.png";
import { DishCollection } from "../../components/DishCollection";
import { DishCard } from "../../components/DishCard";
import { FaHeart, FaRegHeart, FaPencil } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const pratos = [
  {
    title: "Spaguetti Gambe",
    price: 19.99,
    description: "Massa fresca com camarões e pesto. ",
    isFavorite: false,
  },
  {
    title: "Spaguetti Gambe",
    price: 19.99,
    description: "Massa fresca com camarões e pesto. ",
    isFavorite: true,
  },
  {
    title: "Spaguetti Gambe",
    price: 19.99,
    description: "Massa fresca com camarões e pesto. ",
    isFavorite: true,
  },
  {
    title: "Spaguetti Gambe",
    price: 19.99,
    description: "Massa fresca com camarões e pesto. ",
    isFavorite: false,
  },
  {
    title: "Spaguetti Gambe",
    price: 19.99,
    description: "Massa fresca com camarões e pesto. ",
    isFavorite: false,
  },
];

export function Home() {
  const { user } = useAuth();

  const [dishes, setDishes] = useState([]);
  const [dishQuantity, setDishQuantity] = useState(0);
  const [swiperActive, setSwiperActive] = useState(false);

  useEffect(() => {
    setDishes(pratos);

    if (dishes.length > 4) {
      setDishQuantity(4);
      setSwiperActive(true);
    } else {
      setDishQuantity(dishes.length);
      setSwiperActive(false);
    }
  }, [dishes]);

  return (
    <Container>
      <Header />

        <Main>
            <section className="banner">
            <img src={fruitsImg} alt="Imagem de frutas vermelhas e macarons" />
            <div className="section_info">
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
            </section>

            <DishCollection title="Refeições" swiperActive={swiperActive}>
                {swiperActive ? (
                    <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={dishQuantity}
                    navigation
                    scrollbar={{ draggable: true }}
                    >
                    {dishes &&
                        dishes.map((dishe) => (
                        <SwiperSlide key={1}>
                            <DishCard
                            icon={user.role === "admin" ? FaPencil : dishe.isFavorite ? FaHeart : FaRegHeart}
                            title={dishe.title}
                            price={dishe.price}
                            description={dishe.description}
                            />
                        </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    dishes &&
                    dishes.map((dishe) => (
                    <DishCard
                        key={1}
                        icon={dishe.icon}
                        title="Spaguetti Gambe"
                        price={19.99}
                        description="Massa fresca com camarões e pesto. "
                    />
                    ))
                )}
            </DishCollection>

            <DishCollection title="Sobremesas"  swiperActive={swiperActive}>
                {swiperActive ? (
                    <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={dishQuantity}
                    navigation
                    scrollbar={{ draggable: true }}
                    >
                    {dishes &&
                        dishes.map((dishe) => (
                        <SwiperSlide key={1}>
                            <DishCard
                            icon={user.role === "admin" ? FaPencil : FaRegHeart}
                            title={dishe.title}
                            price={dishe.price}
                            description={dishe.description}
                            />
                        </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    dishes &&
                    dishes.map((dishe) => (
                    <DishCard
                        key={1}
                        icon={dishe.icon}
                        title="Spaguetti Gambe"
                        price={19.99}
                        description="Massa fresca com camarões e pesto. "
                    />
                    ))
                )}
            </DishCollection>

            <DishCollection title="Bebidas"  swiperActive={swiperActive}>
                {swiperActive ? (
                    <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={dishQuantity}
                    navigation
                    scrollbar={{ draggable: true }}
                    >
                    {dishes &&
                        dishes.map((dishe) => (
                        <SwiperSlide key={1}>
                            <DishCard
                            icon={user.role === "admin" ? FaPencil : FaRegHeart}
                            title={dishe.title}
                            price={dishe.price}
                            description={dishe.description}
                            />
                        </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    dishes &&
                    dishes.map((dishe) => (
                    <DishCard
                        key={1}
                        icon={dishe.icon}
                        title="Spaguetti Gambe"
                        price={19.99}
                        description="Massa fresca com camarões e pesto. "
                    />
                    ))
                )}
            </DishCollection>
        </Main>

      <Footer />
    </Container>
  );
}
