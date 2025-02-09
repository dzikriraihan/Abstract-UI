import Image from "next/image";

export default function Contents() {
  return (
    <div className="flex justify-center py-44">
      <div className="grid grid-cols-2 gap-24 w-2/3 place-content-center">
        {/* item 1 */}
        <div className="grid grid-cols-12">
          <Image
            src="/using-abstract.png"
            alt="abstract"
            width={100}
            height={100}
            className="col-span-3"
          />
          <div className="col-span-9">
            <h4 className="font-bold text-2xl">Using Abstract</h4>
            <p className="text-xl my-2">
              Abstract lets you manage, version, and document your designs in
              one place.
            </p>
            <a
              href="#"
              className="flex items-center text-primary hover:text-secondary transition-colors"
            >
              Learn More <i className="bx bx-right-arrow-alt text-xl"></i>
            </a>
          </div>
        </div>
        {/* item 2 */}
        <div className="grid grid-cols-12">
          <Image
            src="/account.png"
            alt="abstract"
            width={100}
            height={100}
            className="col-span-3"
          />
          <div className="col-span-9">
            <h4 className="font-bold text-2xl">Manage Your Account</h4>
            <p className="text-xl my-2">
              Configure your account settings, such as your email, profile
              details, and password.
            </p>
            <a
              href="#"
              className="flex items-center text-primary hover:text-secondary transition-colors"
            >
              Learn More <i className="bx bx-right-arrow-alt text-xl"></i>
            </a>
          </div>
        </div>
        {/* item 3 */}
        <div className="grid grid-cols-12">
          <Image
            src="/manage.png"
            alt="abstract"
            width={100}
            height={100}
            className="col-span-3"
          />
          <div className="col-span-9">
            <h4 className="font-bold text-2xl">
              Manage organizations, teams, and projects
            </h4>
            <p className="text-xl my-2">
              Use Abstract organizations, teams, and projects to organize your
              people and your work.
            </p>
            <a
              href="#"
              className="flex items-center text-primary hover:text-secondary transition-colors"
            >
              Learn More <i className="bx bx-right-arrow-alt text-xl"></i>
            </a>
          </div>
        </div>
        {/* item 4 */}
        <div className="grid grid-cols-12">
          <Image
            src="/billing.png"
            alt="abstract"
            width={100}
            height={100}
            className="col-span-3"
          />
          <div className="col-span-9">
            <h4 className="font-bold text-2xl">Manage billing</h4>
            <p className="text-xl my-2">
              Change subscriptions and payment details.
            </p>
            <a
              href="#"
              className="flex items-center text-primary hover:text-secondary transition-colors"
            >
              Learn More <i className="bx bx-right-arrow-alt text-xl"></i>
            </a>
          </div>
        </div>
        {/* item 5 */}
        <div className="grid grid-cols-12">
          <Image
            src="/authenticate.png"
            alt="abstract"
            width={100}
            height={100}
            className="col-span-3"
          />
          <div className="col-span-9">
            <h4 className="font-bold text-2xl">Authenticate to Abstract</h4>
            <p className="text-xl my-2">
              Set up and configure SSO, SCIM, and Just-in-Time provisioning.
            </p>
            <a
              href="#"
              className="flex items-center text-primary hover:text-secondary transition-colors"
            >
              Learn More <i className="bx bx-right-arrow-alt text-xl"></i>
            </a>
          </div>
        </div>
        {/* item 6 */}
        <div className="grid grid-cols-12">
          <Image
            src="/support.png"
            alt="abstract"
            width={100}
            height={100}
            className="col-span-3"
          />
          <div className="col-span-9">
            <h4 className="font-bold text-2xl">Abstract support</h4>
            <p className="text-xl my-2">Get in touch with a human.</p>
            <a
              href="#"
              className="flex items-center text-primary hover:text-secondary transition-colors"
            >
              Learn More <i className="bx bx-right-arrow-alt text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
