import Overview from "./Detail/Overview";
import { AnimeAttributes } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Relations from "./Detail/Relations";
import Characters from "./Detail/Characters";

interface Props {
  data: AnimeAttributes;
}

const TabsComponent = ({ data }: Props) => {
  return (
    <Tabs defaultValue="overview" className="w-full mt-5">
      <TabsList className="w-full">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="relations">Relations</TabsTrigger>
        <TabsTrigger value="characters">Characters</TabsTrigger>
        <TabsTrigger value="staff">Staff</TabsTrigger>
        <TabsTrigger value="Trailer">Trailer</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Overview data={data} />
      </TabsContent>
      <TabsContent value="relations">
        <Relations />
      </TabsContent>
      <TabsContent value="characters">
        <Characters />
      </TabsContent>
      <TabsContent value="staff"></TabsContent>
      <TabsContent value="trailer"></TabsContent>
    </Tabs>
  );
};

export default TabsComponent;
