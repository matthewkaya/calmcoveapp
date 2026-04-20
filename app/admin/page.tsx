import { AdminPanel } from "@/components/admin/AdminPanel";
import { LoginForm } from "@/components/admin/LoginForm";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { getEditableContentFiles, getStorageMode } from "@/lib/admin/storage";

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();

  return (
    <main className="min-h-screen px-5 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2e6a69]">
            CalmCove Admin
          </p>
          <h1 className="mt-3 font-display text-6xl text-[#14313a]">
            Edit the site without touching code.
          </h1>
          <p className="mt-4 text-base leading-8 text-[#4b5d64]">
            Update structured JSON content, upload visuals, and keep the public site
            presentation-ready. Local development writes directly to files; deployed
            Netlify writes through GitHub when repository environment variables are set.
          </p>
        </div>

        {authenticated ? (
          <AdminPanel
            initialFiles={await getEditableContentFiles()}
            storageMode={getStorageMode()}
          />
        ) : (
          <LoginForm />
        )}
      </div>
    </main>
  );
}

