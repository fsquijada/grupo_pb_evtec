import type { RegistrationData } from "../types";

export interface RegistrationService {
  register(data: RegistrationData): Promise<void>;
}

export class HttpRegistrationService implements RegistrationService {
  public constructor(private readonly endpoint: string) {}

  public async register(data: RegistrationData): Promise<void> {
    if (!this.endpoint) {
      await new Promise((resolve) => window.setTimeout(resolve, 900));
      return;
    }

    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("No fue posible completar el registro.");
    }
  }
}
