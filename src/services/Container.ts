import { Container } from "inversify";

// Scope Definition Description

// Singleton (.inSingletonScope())
// A single instance of the dependency is created and reused throughout
// the application.

// Transient (.inTransientScope())
// A new instance of the dependency is created every time it is requested
// from the container.

// Request (.inRequestScope())
// Typically used in web applications, a single instance is created
// per HTTP request.

/**
 * Dependency Injection Container
 * 
 * This container is responsible for binding interfaces to their respective
 * implementations. It uses InversifyJS for dependency injection.
 */
export const dicontainer = new Container();

//dicontainer.bind<ITipoRepository>("TipoRepository").to(TipoRepository).inTransientScope(); // Bind the repositories here like this.