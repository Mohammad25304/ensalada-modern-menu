import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/SectionHeading";
import { MenuCard } from "@/components/MenuCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, menuItems } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — ENSALADA" },
      {
        name: "description",
        content:
          "Explore the ENSALADA menu: signature bowls, leafy greens, protein salads, warm roasted bowls, and refreshing sides.",
      },
      { property: "og:title", content: "Menu — ENSALADA" },
      {
        property: "og:description",
        content:
          "Explore the ENSALADA menu: signature bowls, leafy greens, protein salads, warm roasted bowls, and refreshing sides.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <main className="min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Discover"
          title="Our Menu"
          description="Organized by craving. Pick a category and find your next favorite bowl."
        />

        <div className="mt-12">
          <Tabs defaultValue="signature" className="w-full">
            <div className="sticky top-16 z-30 -mx-4 bg-background/95 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-2xl bg-secondary/60 p-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-xl px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => {
              const items = menuItems.filter(
                (item) => item.category === category.id,
              );
              return (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="mt-8 focus-visible:outline-none"
                >
                  <div className="mb-8 max-w-2xl">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </main>
  );
}
