import Card from "@/components/home/Card";
import CarouselComponent from "@/components/home/Carousel";
import cardData from "../store/cardData.json"
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import { baseUrl } from "@/utils/baseUrl";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home(props) {

let datas = props.data.data;

  
  let categories = new Set();
  const [typeFilter, setTypeFilter] = useState(false);
  const foodData = []
  const handleData = () => {
   datas.map((data) => {
      return foodData.push(data), categories.add(data.category)
    })


  }

  handleData()

  const categoryArray = [...categories];
    
  return (

    <div>
      <CarouselComponent />

      <div className="container mx-auto">
        <div className="my-6 space-x-5">
        
        <button
          className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${!typeFilter && "bg-slate-300 dark:bg-slate-600"
            } `}
          onClick={() => setTypeFilter(false)}>All</button>
        <button
          className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${typeFilter === "Veg" && "bg-slate-300 dark:bg-slate-600"
            } `}
          onClick={() => {
            setTypeFilter("Veg")
          }}>
          <span
            className={
              "lowercase font-thin bg-white border-green-500 border mr-2 px-0.1 text-green-500"
            }
          >
            ●
          </span>Veg</button>
        <button
          className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${typeFilter === "Non-Veg" && "bg-slate-300 dark:bg-slate-600"
            } `}
          onClick={() => {
            setTypeFilter("Non-Veg")
          }}> <span
            className={
              "lowercase font-thin bg-white border-red-500 border mr-2 px-0.1 text-red-500"
            }
          >
            ●
          </span>Non-Veg</button>
        </div>
        {categoryArray.map((category, index) => {
          return <div key={index}>
            <div  className="text-4xl mt-10 mb-3 uppercase font-bold">
              {category}

            </div>
            <hr />
            <div className="flex flex-col items-center justify-center">

              <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                  foodData?.filter((foodData) => category === foodData.category)
                  ?.filter((foodData)=>typeFilter?typeFilter===foodData.foodType:foodData)
                  ?.map((data) => {
                    return <Card key={data.name} foodData={data} />
                  })
                }

              </div>
            </div>
          </div>


        })}
      </div>

    </div>
  );
}
export async function getStaticProps() {
  let data;
  try {
    const pizzaData = await fetch(baseUrl + "api/foodData", { method: "GET" })
      .then((response) => response.json())
      .catch((error) => error.message);

    data = await JSON.parse(JSON.stringify(pizzaData)); // step required during deployment in staticProps
    console.log("Data",data.data);
    
  } catch (error) {
    console.log(error.message);
  }

  return {
    props: {
      data: data || null,
    },
    revalidate: 5,
  };
}


