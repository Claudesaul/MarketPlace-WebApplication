import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
      <MaxWidthWrapper>
    <div className={'py-20 mx-auto text-center flex flex-col items-center max-w-3xl'}>
      <h1>Your Marketplace for the best digital <span className={'text-blue-600'}> digital assests</span>.
      </h1>
    </div>
  </MaxWidthWrapper>
  )
}
