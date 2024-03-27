import React from "react";
import { Stepper, Step, } from "@material-tailwind/react";

export function LocalStepper() {
    const [activeStep, setActiveStep] = React.useState(0);


    return (
        <div className="w-full py-4 px-8">
            <Stepper placeholder={""}
                activeStep={activeStep}
            >
                <Step placeholder={""} onClick={() => setActiveStep(0)}>Quiz List</Step>
                <Step placeholder={""} onClick={() => setActiveStep(1)}>Add Quiz</Step>

            </Stepper>

        </div>
    );
}