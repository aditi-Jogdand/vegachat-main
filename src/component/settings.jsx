import { createSignal } from "solid-js";
import Profilepic from './img/profile.png';

function UserProfile() {
  return (
    <div class="p-4 border-b border-gray-200">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img
            class="h-12 w-12 rounded-full"
            src= {Profilepic}
            alt="avatar"
          />
        </div>
        <div class="ml-3">
          <p class="text-base leading-6 font-medium text-gray-900">
            Me
          </p>
          <p class="text-sm leading-5 text-gray-500">Meow@example.com</p>
        </div>
      </div>
    </div>
  );
}

function AccountSettings() {
  return (
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Account</h2>
      <p class="mt-1 text-sm leading-5 text-gray-500">
        Personal details and preferences.
      </p>
    </div>
  );
}

function PrivacySettings() {
  return (
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Privacy</h2>
      <p class="mt-1 text-sm leading-5 text-gray-500">
        Control who can see your activity and profile.
      </p>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Notifications</h2>
      <p class="mt-1 text-sm leading-5 text-gray-500">
        Manage when and how you receive notifications.
      </p>
    </div>
  );
}

function SecuritySettings() {
  return (
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Security</h2>
      <p class="mt-1 text-sm leading-5 text-gray-500">
        Keep your account secure and protected.
      </p>
    </div>
  );
}

function UserSetting() {
  return (
    <div class="space-y-6">
      <UserProfile />
      <AccountSettings />
      <PrivacySettings />
      <NotificationSettings />
      <SecuritySettings />
    </div>
  );
}

export default UserSetting;