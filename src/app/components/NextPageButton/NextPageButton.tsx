"use client";

export function NextPageButton() {
  const scrollBy100vh = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollBy100vh}
      className="fixed bottom-4 right-4 p-4 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 focus:outline-none"
    >
      next
    </div>
  );
}
