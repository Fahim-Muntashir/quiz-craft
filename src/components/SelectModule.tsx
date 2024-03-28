import { Select, Option } from "@material-tailwind/react";
import { useAppDispatch } from "../redux/hooks";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";
import { useGetAllModuleQuery } from "../redux/api/baseApi";

export function SelectModule() {
    const dispatch = useAppDispatch()

    const { data: modules, isLoading } = useGetAllModuleQuery()
    return (
        <div className="w-72 my-12 ">
            <Select onChange={
                (value) => {
                    dispatch(setActiveStepper(1))
                }
            } placeholder={""} label="Select Module">
                <Option value="module">Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
        </div>
    );
}