import { Button } from "@/components/ui/button";
import { GTMButton } from "@/components/gtm-button";
import { gtEvent } from "@/lib/gt";

export default function HomePage() {

  return (
    <div
      id="home-page"
      className="flex flex-col items-center justify-center gap-8 py-16"
    >
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Welcome Home
      </h1>
      <p className="max-w-md text-center text-lg text-zinc-600 dark:text-zinc-400">
        This is the home page. Start building your amazing application here.
      </p>
      <GTMButton
        id="get-started-button"
        variant="primary"
        eventName="click_start_btn"
      >
        Get Started
      </GTMButton>
      <br />
      <Button id="trigger-gtm-event" variant="primary">
        Triger GTM Event
      </Button>
    </div>
  );
}

