import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30.00,
            "features": [
                "Access to gym during staffed hours",
                "Use of cardio equipment",
                "Use of weight machines",
                "Locker room access",
                "Monthly fitness assessment",
                "Access to online workout plans"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 45.00,
            "features": [
                "24/7 gym access",
                "Use of cardio equipment",
                "Use of weight machines",
                "Locker room access",
                "Free Wi-Fi",
                "One free personal training session per month",
                "Monthly fitness assessment",
                "Access to online workout plans",
                "Discount on health and wellness products",
                "Free guest pass once a month"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 60.00,
            "features": [
                "24/7 gym access",
                "Use of cardio equipment",
                "Use of weight machines",
                "Locker room access",
                "Free Wi-Fi",
                "Unlimited group fitness classes",
                "Two free personal training sessions per month",
                "Access to sauna and steam room",
                "Monthly fitness assessment",
                "Access to online workout plans",
                "Discount on health and wellness products",
                "Free guest pass twice a month",
                "Access to exclusive workshops and seminars"
            ]
        }
        // {
        //     "id": 4,
        //     "name": "VIP Membership",
        //     "price": 90.00,
        //     "features": [
        //         "24/7 gym access",
        //         "Use of cardio equipment",
        //         "Use of weight machines",
        //         "Locker room access",
        //         "Free Wi-Fi",
        //         "Unlimited group fitness classes",
        //         "Four free personal training sessions per month",
        //         "Access to sauna and steam room",
        //         "Priority class booking",
        //         "Free gym merchandise",
        //         "Monthly fitness assessment",
        //         "Access to online workout plans",
        //         "Discount on health and wellness products",
        //         "Unlimited guest passes",
        //         "Access to exclusive workshops and seminars",
        //         "Personalized nutrition plan",
        //         "Priority equipment reservation"
            ]
    

    return (
        <div className="mt-12 mx-20">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;