import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServicesDetail = () => {
    const [serviceItems, setServiceItems] = useState({});
    const {name, image, price, short_description, long_detail, key_features, special_features} = serviceItems;
    const {id} = useParams();
    useEffect(()=>{
        fetch('/servicesData.json')
        .then(res=> res.json())
        .then(data=> {
            const find = data.find(item => item.id == id);
            setServiceItems(find)
        })
    },[id])
    console.log(serviceItems);
    return (
        <div> 
            <div className="w-11/12 mx-auto">
                <div className="min-h-screen my-6">
                    <div className="text-center my-5">
                    <h3 className="text-3xl font-semibold">{name}</h3>
                    <p>{short_description}</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                    <img src={image} className="rounded-md mb-5" alt={`image about ${name}`} />
                    <p className="font-medium">{long_detail}</p>
                    </div>
                    <div className="flex-1 space-y-6">
                        <div>
                            <h4 className="text-2xl font-semibold">Main Features</h4>
                            <div className="font-medium">
                                {
                                    key_features?.map((feature, indx) => <li key={indx}>{feature}</li>)
                                }
                            </div>
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold">Speacial Features</h4>
                            <div className="font-medium">
                                {
                                    special_features?.map((feature, indx) => <li key={indx}>{feature}</li>)
                                }
                            </div>
                          <button className="py-3 my-5 px-4 rounded-md font-semibold text-primary bg-secondery">{price}</button>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesDetail;