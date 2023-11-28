import MyReviewsCard from "./MyReviewsCard";
import { useLoaderData } from "react-router-dom";


const MyReviews = () => {
    const reviews = useLoaderData();
    return (
        <div className="">
            
        {
            reviews.map((review, index) => <MyReviewsCard review={review} index={index} key={index}></MyReviewsCard>)
        }

    </div>   
    );
};

export default MyReviews;