# Short Circuit Eval Notes

**Short-circuit evaluation** = when programming languages avoid additional
checking of conditional expressions when the result is unambiguous after
checking only one part of the conditional

This can be used to avoid throwing errors sometimes too, by prepending a
check to an existing conditional that can throw an error due to a missing
key value, for example.
