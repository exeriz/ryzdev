import { Container } from "@/components/Layout/Container";
import { Svg } from "@/components/Optimizing/Svg";

type ErrorStateProps = {
  error: string;
};

const ErrorIcon = () => (
  <Svg
    variant="outline"
    width={100}
    height={100}
    draw={[
      "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
    ]}
  />
);

const WarningIcon = ({ size = 22 }: { size?: number }) => (
  <Svg
    variant="outline"
    width={size}
    height={size}
    draw={[
      "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
    ]}
  />
);

const EmptyStateIcon = () => (
  <Svg
    variant="outline"
    width={100}
    height={100}
    draw={[
      "M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z",
    ]}
  />
);

const NoProjectsIcon = () => (
  <Svg
    variant="outline"
    width={100}
    height={100}
    draw={[
      "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z",
      "M6 6h.008v.008H6V6Z",
    ]}
  />
);

const AlertBox = ({
  variant = "error",
  title,
  children,
}: {
  variant?: "error" | "warning";
  title: string;
  children: React.ReactNode;
}) => {
  const baseClasses = "rounded-md p-4";
  const variantClasses = {
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="flex">
        <div className="shrink-0">
          <WarningIcon />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">{title}</h3>
          <div className="mt-2 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

export function LoadingState() {
  return (
    <Container className="text-center py-10">
      <span className="animate-pulse">Loading projects...</span>
    </Container>
  );
}

export function ErrorState({ error }: Readonly<ErrorStateProps>) {
  return (
    <Container className="flex flex-col justify-center items-center py-10 text-red-500">
      <ErrorIcon />
      <p className="text-xl font-medium my-5">{error}</p>

      <AlertBox
        variant="error"
        title="Attention needed"
      >
        <p>
          This message appears because the content failed to load. This happens
          due to a code error or user network issue.
        </p>
      </AlertBox>
    </Container>
  );
}

export function EmptyState() {
  return (
    <Container className="flex flex-col justify-center items-center py-10 text-red-500">
      <EmptyStateIcon />
      <p className="text-xl font-medium my-5">No Project found.</p>

      <AlertBox
        variant="warning"
        title="Attention needed"
      >
        <p>
          This message appears because the content was not found. This occurs due
          to an error in the code or API on this site.
        </p>
      </AlertBox>
    </Container>
  );
}

export function NoProjectsFound() {
  return (
    <Container className="flex flex-col justify-center items-center py-10 text-red-500">
      <NoProjectsIcon />
      <p className="text-xl font-medium my-5">
        No projects found for the selected category.
      </p>

      <AlertBox
        variant="warning"
        title="Attention needed"
      >
        <p>
          This message appears because the content was not found. This happens
          because there are no related projects in this category.
        </p>
      </AlertBox>
    </Container>
  );
}