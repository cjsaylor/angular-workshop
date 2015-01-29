# Services

Services are a way to share code and data among your application. They are only instantiated when
they are injected through Angular's DI container. They are only insantiated once.

[More indepth information on services](https://code.angularjs.org/1.3.10/docs/guide/services).

## Assignment

Create a `catalog` service that uses Angular's `$http` service to retrieve catalog items
from a remote resource: `data/catalog.json`. Use this new `catalog` service in the `Catalog`
controller you created in the scope assignment.

Also, use this `catalog` service in a new `Filter` controller to use to display all available colors
in the color filter component.
