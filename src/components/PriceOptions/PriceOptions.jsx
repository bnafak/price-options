import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    
        const priceOptions = [
          {
            "id": "basic_membership",
            "name": "Basic Membership",
            "features": [
              "Access to cardio equipment",
              "Access to strength training area",
              "Unlimited group fitness classes",
              "Locker room access",
              "Month-to-month membership"
            ],
            "price": 29.99
          },
          {
            "id": "premium_membership",
            "name": "Premium Membership",
            "features": [
              "All Basic Membership features",
              "Access to sauna and steam room",
              "Personal training session (1 per month)",
              "Nutritional counseling",
              "Discounts on gym merchandise",
              "12-month contract"
            ],
            "price": 49.99
          },
          {
            "id": "family_membership",
            "name": "Family Membership",
            "features": [
              "Access for 2 adults and 2 children",
              "All Premium Membership features for each member",
              "Childcare services available",
              "Family fitness classes",
              "24-month contract"
            ],
            "price": 89.99
          }
        ]
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best prices in the town</h2>
            <div className="grid grid-cols-3 gap6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}> </PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;