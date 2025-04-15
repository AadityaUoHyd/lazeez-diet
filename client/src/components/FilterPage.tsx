import { useRestaurantStore } from "@/store/useRestaurantStore";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export type FilterOptionsState = {
  id: string;
  label: string;
};

const filterOptions: FilterOptionsState[] = [
  { id: "biryani", label: "Biryani" },
  { id: "rasgulla", label: "Rasgulla" },
  { id: "burger", label: "Burger" },
  { id: "thali", label: "Thali" },
  { id: "sushi", label: "Sushi" },
  { id: "momos", label: "Momos" },
  { id: "pasta", label: "Pasta" },
  { id: "pizza", label: "Pizza" },
  { id: "salad", label: "Salad" },
  { id: "tacos", label: "Tacos" },
  { id: "samosa", label: "Samosa" },
  { id: "chocolate", label: "Chocolate" },
  { id: "icecream", label: "Ice Cream" },
  { id: "cake", label: "Cake" },
  { id: "paneer", label: "Paneer" },
  { id: "dal", label: "Dal" },
];

const FilterPage = () => {
  const { setAppliedFilter, appliedFilter, resetAppliedFilter } = useRestaurantStore();

  // Removed unused appliedFilterHandler function

  return (
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg">Filter by dishes</h1>
        <Button variant={"link"} onClick={resetAppliedFilter}>Reset</Button>
      </div>
      {filterOptions.map((option) => (
        <div key={option.id} className="flex items-center space-x-2 my-5">
          <Checkbox
            id={option.id}
            checked={appliedFilter.includes(option.label)} // Bind checkbox to appliedFilter state
            onCheckedChange={(checked) => {
              if (checked) {
                setAppliedFilter(option.label); // Add the option to appliedFilter if checked
              } else {
                setAppliedFilter(option.label); // Remove the option if unchecked
              }
            }}
          />
          <Label htmlFor={option.id} className="text-sm font-medium leading-none">
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default FilterPage;
