# Filters

Filters in Angular can be both for view variable string manipulation or as a filter
on a list of elements and can be used at almost every level of Angular (view, controller, or service).

[More indepth information on filters](https://code.angularjs.org/1.3.10/docs/guide/filter)

## Assignment

1. Create a filter called `capitalize` that will capitalizes all words in a string.
2. Use the `capitalize` filter on the colors Filter component.
3. Create a filter called `colors` that filters the `catalog.json` input and accepts
   an array of colors that it should keep in the catalog collection.
4. Use the `colors` filter on the color filter component that uses the FilterController's
   `selectedColors` parameter. This should enable the catalog to only display the colors
   selecte in the color filter component.

#### Optional

5. Create an in-line filter that filters the catalog by a search term.
