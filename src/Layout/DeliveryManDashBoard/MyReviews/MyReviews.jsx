import useReviews from "../../../Hooks/useReviews/useReviews";
import MyReviewsCard from "./MyReviewsCard";


const MyReviews = () => {
    
    const [Reviews] = useReviews();
    console.log(Reviews)
    return (
        <div className="">
            
        {
            Reviews?.map((review, index) => <MyReviewsCard review={review} index={index} key={index}></MyReviewsCard>)
        }

    </div>   
    );
};

export default MyReviews;