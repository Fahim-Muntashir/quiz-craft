import React from "react";
import { Stepper, Step, } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setActiveStepper } from '../redux/features/stepper/stepperSlice'

export function LocalStepper() {
    const { activeStep } = useAppSelector((state) => state.stepper)

    const dispatch = useAppDispatch()

    return (
        <div className="w-full py-4 px-8">
            <Stepper placeholder={""}
                activeStep={activeStep}
            >
                <Step placeholder={""} onClick={() => dispatch(setActiveStepper(0))} className="px-8 w-fit">Quiz List</Step>
                <Step className="px-8 w-fit" placeholder={""} onClick={() => dispatch(setActiveStepper(1))}>Add Quiz</Step>

            </Stepper>

        </div>
    );
}