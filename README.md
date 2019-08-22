# class-based-programming
Data model construction on class abstractions (for languages that have them).

For the purpose of demonstration, the files contained in this project will not have anything resembling solution metadata. Namely languages including, but not limited to, JavaScript (package.json, package-lock.json, yarn.lock); C# / F# / VB; Rust and Ruby.

## Primary Ideals

*Since there is more than one way to do this, each of the possibilities opens up both good and bad features of each language found here. Not all of these are possible in certain languages, given that they not have access to features used in sibling languages.*

- Independant
  - `[-]` Data caching unlikely
- One File
  - `[~]` Depends on module used
  - `[-]` Asset access may be limited, dependant on export method.
- Recall Parent
  - `[+]` Automatic garbage collection on unused assets
  - `[-]` Higher rate of class instancing
- Recall Parent (Instance)
  - `[-]` Likely to cause memory leaks
  - `[-]` Data loss possible