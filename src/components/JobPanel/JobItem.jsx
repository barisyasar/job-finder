// Job Item
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BriefcaseBusiness } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

function JobItem() {
  return (
    <Card className="job-item lg:flex items-start">
      <BriefcaseBusiness size={48} className="hidden lg:block ms-6 mt-6" />
      <div className="lg:flex-grow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <BriefcaseBusiness size={28} className="lg:hidden" />
            <CardTitle>Card Title</CardTitle>
          </div>
          <CardDescription>Location:</CardDescription>
          <CardDescription>Salary:</CardDescription>
        </CardHeader>
        <CardContent className="max-w-3xl">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut qui
            iusto magni eius harum, corporis fugiat similique saepe nam
            temporibus?
          </p>
          <div className="flex gap-2">
            <Badge className="bg-blue-600 text-white"># ipsum</Badge>
            <Badge className="bg-blue-600 text-white"># dolar</Badge>
            <Badge className="bg-blue-600 text-white"># sit</Badge>
          </div>
        </CardContent>
      </div>
      <CardFooter className="gap-5 lg:flex lg:flex-col lg:gap-3 lg:m-6">
        <Button className="w-[80px]" size="sm">
          Detail
        </Button>
        <Button className="w-[80px]" size="sm" variant="outline">
          Withdraw
        </Button>
      </CardFooter>
    </Card>
  );
}

export default JobItem;
