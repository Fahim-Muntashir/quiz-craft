import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { QuizCard } from "./QuizCard";
import { LocalStepper } from "./Stepper";

export function TabsWithIcon() {
    const data = [
        {
            label: "Quiz List",
            value: "quiz-list",
            icon: Square3Stack3DIcon,
            desc: <QuizCard>
                Hello WOrld
            </QuizCard>,
        },

        {
            label: "Add Quiz",
            value: "add-quiz",
            icon: Cog6ToothIcon,
            desc: <LocalStepper></LocalStepper>,
        },
    ];
    return (
        <Tabs value="quiz-list">
            <TabsHeader placeholder={""}>
                {data.map(({ label, value, icon }) => (
                    <Tab placeholder={''} key={value} value={value}>
                        <div className="flex items-center gap-2">
                            {React.createElement(icon, { className: "w-5 h-5" })}
                            {label}
                        </div>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody placeholder={""}>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}