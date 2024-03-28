import {
    Card,

    CardBody,

} from "@material-tailwind/react";
import { ReactNode } from "react";

export function QuizCard({ children }: { children: ReactNode }) {
    return (
        <Card placeholder={""} className="w-full h-full">

            <CardBody placeholder={""} className="text-center">
                {children}
            </CardBody>

        </Card>
    );
}