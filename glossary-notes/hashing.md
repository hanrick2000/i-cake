# Hashing Notes

A **hash function** takes some type of data (ie: a string, file contents), and
returns a hash, which is a fixed-size value (may be a string or number)

A hash is sort of like a fingerprint for a file or piece of data.  Hashes
are a one-way method of confirming that a given file is that file, as the
hash should always be the same for the same file contents.

Multiple files can occasionally have the same hash value, in which case there
is a **hash collision**

Common uses for hashing:
1. Dictionaries - allocate a list, use a hash function to translate keys into
list indices, get constant-time lookups
2. Avoid man-in-the-middle attacks - When a site shows a hash / md5 / sha1 value,
they are telling you that they hashed the file a certain way, and you can know
you got the correct version of the file if the hash matches on your end after
downloading it.  If not, someone may have tampered with the download by injecting
something in transit
